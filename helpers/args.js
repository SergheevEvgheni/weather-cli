export const getArgs = (args) => {
    const res = {}
    args.splice(2, args.length).forEach((item, index, array) => {
       if (item.charAt(0) === '-') {
            if (index === array.length -1) {
                res[item.substring(1)] = true
            } else if (array[index + 1].charAt(0) !== '-') {
                res[item.substring(1)] = array[index + 1]
            } 
       } else {
        res.city = item
    }
    })

    return res
}