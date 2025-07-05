const taskInput = document.getElementById("taskInput");
        const addTaskBtn = document.getElementById("addTaskBtn");
        const taskList = document.getElementById("taskList");

        addTaskBtn.addEventListener("click", () => {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = "";
            }
        });

        function addTask(text) {
            const li = document.createElement("li");
            li.textContent = text;

            // Click to completed
            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });

            // Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                li.remove();
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        }