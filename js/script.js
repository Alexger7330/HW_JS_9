const taskList = function () {

    let count = 1;

    this.init = function (params) {
        const app = document.querySelector(`.${params}`);
        const toDoList = document.createElement('div');
        toDoList.classList.add('toDoList');
        toDoList.innerHTML = ` <h3 class="naming">ToDoList</h3>
        <div class="addTask">
            <input type="text" id="task" placeholder="Task for the day">
        </div>
        <ul class="tasks__list">

        </ul>
        <button class="clear">Clear list</button>`
        app.appendChild(toDoList);
        this.addTask();
    }

    this.addTask = function () {
        const input = document.querySelector('#task');
        input.addEventListener('keyup', (event) => {
            if (event.keyCode == 13) {

                if (input.value != 0 && input != '') {
                    let ul = document.querySelector('.tasks__list');

                    let li = document.createElement('li');
                    li.classList.add('list_item');
                    li.innerHTML = `<div class="list_item_check">
                                <input type="checkbox" class="checkbox" name="name_${count}" id="task_${count}">
                                <p class="task_text" >${input.value}</p>
                                </div>`
                    ul.appendChild(li)
                    input.value = '';
                    count++
                    this.clear();
                    this.checker(li);
                    this.changeText(li)
                }
            }
        });
    }

    this.clear = () => {
        const clearBtn = document.querySelector('.clear');
        clearBtn.addEventListener('click', () => {
            document.querySelector('.tasks__list').innerHTML = '';
            count = 0;
        })
    }

    this.checker = function (elem) {
        let label = elem.querySelector('.checkbox');
        label.addEventListener('click', () => {
            let taskText = elem.querySelector('.task_text');
            taskText.classList.toggle('checker__style');
        })
    }

    this.changeText = function (elem) {
        let text = elem.querySelector('.task_text');
        text.addEventListener('click', () => {
            if (confirm('Вы действительно хотите изменить?') === true) {
                text.innerHTML = prompt('Введите новую задачу:', 'Отдохнуть')
            }else{
                alert('Измение отменено')
            }
        })
    }
}

const task = new taskList();
task.init('site');
