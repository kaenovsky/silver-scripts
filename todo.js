let response;
let item;
let todo = [];

while (response !== 'quit') {
    response = prompt('What would you like to do? (add, delete, list, quit)');
    if (response == 'add') {
        item = prompt('What item do you want to ADD to your todo list?');
        todo.push(item);
        console.log(`the item ${item} was added to the todo list!`);
    } else if (response == 'delete') {
        item = prompt('What item do you want to DELETE from your todo list?');
        todo.splice(item, 1);
        console.log(`the item ${item} was deleted from the todo list!`);
    } else if (response == 'list') {
        console.log('**********************');
        for (let i of todo) {
            console.log(todo.indexOf(i) + ": " + i);
        }
        console.log('**********************');
    }
}