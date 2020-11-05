$(function () {
    $("#comments-area").on('click',
        function (event) {
            if (event.target.classList.contains('fa-close')) $(event.target.parentNode).remove();
        });

    $("#addAnounce").on('click',
        function () {
            $("#comments-area").append(
                `<li class="comment-text p-2">
							<div class="form-group mb-0">
								<label for="commentTitle[]">Comment:</label>
								<input class="form-control" name="commentTitle[]" id="commentTitle[]">
								<textarea name="comment[]"class="form-control col-12 mt-1"></textarea>
							</div>
							<i class="fa fa-close"></i>
				</li>`
            );
        });


    $("#addItem").on('click',
        function () {
            let itemHTML = `<div class="input-group mb-2 no-gutters">
							<input type="text" class="form-control">
							<input type="number" min="0" class="form-control rm-w-12">
							<div class="input-group-append">
								<div class="input-group-text">
									<input name="request[]" id="request" type="checkbox">
								</div>
								<div class="input-group-text">
									<input name="active[]" id="active" type="checkbox">
								</div>
								<div class="input-group-text">
									<input name="delete[]" id="delete" type="checkbox">
								</div>
							</div>
						</div>
`;
            $("#itemInventory").prepend(itemHTML);
        });
    $(".custom-file input").on('change', function () {
        let fileName = this.value.replace('C:\\fakepath\\', '');
        fileName = fileName ? fileName : 'Choose file';
        $('label[for="' + this.id + '"]')[0].innerHTML = fileName;

    });
});