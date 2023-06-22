console.log("hi")
const list = ["Bath","Brush TEETH"]
let choice = prompt("Enter Your Choice :\n")
while(choice !=="quit"){
    
    if(choice=="list"){
        console.log("******")
        for(let i=0;i<list.length;i++){
            console.log(list[i]);
        }
        console.log("******")
    }
    else if(choice=="bye")
        console.log("bye!");
    else if(choice =="new"){
        const newToDo = prompt("Enter New ToDo\n")
        list.push(newToDo)
        console.log(`${newToDo} added to the list!`)

    }
    else if(choice =="delete"){
        let  index = parseInt(prompt("Enter Index to Delete\n"))
        if(index!==0){
        while(!index || index>=list.length){
            index = parseInt(prompt("Enter Valid Index to Delete\n"))
        }}
        const deleted =list.splice(index,1)
        console.log(`${deleted} deleted successfully!`)

    }
    choice = prompt("Enter Your Choice :\n")
}
console.log("THank You!!")