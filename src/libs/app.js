export const forEach = (arr, fn) => {
    if (!arr.length || !fn) return
    let i = -1
    let len = arr.length
    while (++i < len) {
        let item = arr[i]
        fn(item, i, arr)
    }
}
/**
* @param {Array} target 目标数组
* @param {Array} arr 需要查询的数组
* @description 判断要查询的数组是否至少有一个元素包含在目标数组中
*/
export const hasOneOf = (targetarr, arr) => {
    return targetarr.some(_ => arr.indexOf(_) > -1)
}

export const hasChild = (item) => {
    return item.children && item.children.length !== 0
}


// 过滤权限
const showThisMenuEle = (item, access) => {
    if (item.meta && item.meta.access && item.meta.access.length) {
        if (hasOneOf(item.meta.access, access)) return true
        else return false
    } else return true
}
/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list, access) => {
    let res = []
    forEach(list, item => {
        // 不隐藏菜单的话进入判断
        if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
            let obj = {
                icon: (item.meta && item.meta.icon) || '',
                name: item.name,
                meta: item.meta
            }
            if ((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item, access)) {
                obj.children = getMenuByRouter(item.children, access)
            }
            if (item.meta && item.meta.href) obj.href = item.meta.href
            if (showThisMenuEle(item, access)) res.push(obj)
        }
    })
    return res
}

export const showTitle = (item) => {
    let title = (item.meta && item.meta.title) || item.name
    return title
}

  /**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2]))
  }

  export const findNodeUpperByClasses = (ele, classes) => {
    let parentNode = ele.parentNode
    if (parentNode) {
      let classList = parentNode.classList
      if (classList && classes.every(className => classList.contains(className))) {
        return parentNode
      } else {
        return findNodeUpperByClasses(parentNode, classes)
      }
    }
  }
  