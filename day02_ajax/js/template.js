function template(id , date){
    let str= document.querySelector('#'+id).innerHTML
    let regular = /{{\s*([a-zA-Z]+)\s*}}/

    let result = null
    while(result = regular.exec(str)){
        str = str.replace(result[0],date[result[1]])
    }
    return str
}
