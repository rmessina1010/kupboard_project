$(function () {
    $("#comments-area").on('click',
        function (event) {
            if (event.target.classList.contains('fa-close')) $(event.target.parentNode).remove();
        });

    $("#addAnounce").on('click',
        function () {
            $("#comments-area").append(
                `<li class="comment-text">
                    <textarea name="comment" class="form-control col-12 mb-3">New Element</textarea>
                    <i class="fa fa-close"></i>
                </li>`
            );
        });

});

let li = document.createElement('li');
li.className = "comment-text";
let txta = document.createElement('textArea');
txta.className = "form-control col-12 mb-3";
txta.name = "comment[]";
let icon = document.createElement('i');
icon.className = "fa fa-close";
li.appendChild(txta);
li.appendChild(icon);
