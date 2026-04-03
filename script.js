function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value;

  if (text === "") {
    alert("Enter a task!");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${text}</span>
    <div class="icons">
      <button class="edit-btn" onclick="editTask(this)">✏</button>
      <button onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);

  showMessage("Todo item Created Successfully");

  input.value = "";
}

function deleteTask(btn) {
  btn.parentElement.parentElement.remove();
}

function toggleTask(span) {
  span.classList.toggle("completed");

  let editBtn = span.parentElement.querySelector(".icons .edit-btn");

  if (span.classList.contains("completed")) {
    editBtn.disabled = true;
  } else {
    editBtn.disabled = false;
  }
}
function showMessage(msg) {
  let message = document.getElementById("message");
  message.innerText = msg;

  setTimeout(() => {
    message.innerText = "";
  }, 2000);
}