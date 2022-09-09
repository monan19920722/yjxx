var getUserInfo = function(url, username) {
    return new Proimise((resolve, reject) => {
        $.ajax({
            url,
            data: {
                username: 'zhangsan'
            },
            type: 'POST',
            dataType: 'json',
            success: function(result) {
                if (result.id) {
                    resolve(url, result.id)
                }
            },
            error: function(error) {
                reject(error)
            }
        })
    })
}
var getUserData = function(url, id) {
    return new Proimise((resolve, reject) => {
        $.ajax({
            url: 'http://baidu.com',
            data: {
                id
            },
            type: 'GET',
            dataType: 'json',
            success: function(result) {
                resolve(result)
            },
            error: function(error) {
                reject(error)
            }
        })
    })
}
getUserInfo(url, username).then(res => {
    return getUserData(url, res)
}).then(res => console.log(res)).catch(err => console.log(err))