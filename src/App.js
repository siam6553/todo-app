<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App by Raiyan</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f2f2f2;
        }

        header {
            background-color: indigo;
            color: white;
            text-align: center;
            padding: 20px 0;
            font-size: 24px;
        }

        main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .todo-container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            width: 300px;
            text-align: center;
        }

        .todo-container h2 {
            margin-bottom: 20px;
        }

        input[type="text"] {
            width: 80%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        button {
            padding: 10px 15px;
            background-color: indigo;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 5px;
        }

        button:hover {
            background-color: #4b0082;
        }

        ul {
            list-style: none;
            padding: 0;
            margin-top: 20px;
            text-align: left;
        }

        ul li {
            padding: 10px;
            margin-bottom: 10px;
            background-color: #f9f9f9;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        ul li span {
            flex: 1;
        }

        ul li button {
            background-color: crimson;
            font-size: 12px;
        }

        footer {
            text-align: center;
            padding: 15px 0;
            background-color: #eee;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <header>
        My To-Do App
    </header>

    <main>
        <div class="todo-container">
            <h2>To-Do List</h2>
            <input type="text" id="taskInput" placeholder="Enter a task">
            <button onclick="addTask()">Add</button>
            <ul id="taskList"></ul>
        </div>
    </main>

    <footer>
        This App is made with love by Raiyan
    </footer>

    <script>
        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }

            const li = document.createElement('li');

            const span = document.createElement('span');
            span.innerText = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.onclick = function() {
                li.remove();
            };

            li.appendChild(span);
            li.appendChild(deleteButton);

            document.getElementById('taskList').appendChild(li);

            taskInput.value = '';
        }

        // Allow adding task by pressing "Enter"
        document.getElementById('taskInput').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    </script>

</body>
</html>