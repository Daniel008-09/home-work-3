const xhr = new XMLHttpRequest(
)

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

xhr.send()

xhr.onload = ()=>{
    console.log(xhr.responseText);
}
