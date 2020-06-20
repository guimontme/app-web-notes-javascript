class noteController{
    constructor(){
        this.box_single_note = document.querySelector(".box-single-notes");
        this.box_note = this.box_single_note.querySelector(".note");
        this.btn_plus_note = document.querySelector(".btn-plus-notes");
        this.textarea = document.querySelector("textarea");

        this.btn_edit = document.querySelector("header i:nth-of-type(1)");
        this.btn_delete = document.querySelector("header i:nth-of-type(2)");
        this.btn_check = document.querySelector("header i:nth-of-type(3)");
        this.initialize();
    }

    initialize(){
        this.clickPlusNote();
        
    }

    clickPlusNote(){
        this.btn_plus_note.addEventListener("click", ()=> {
            if(!this.i) this.i = 1;
            this.templateNote(this.i);
            this.clickNote();
            this.i++;
        })
    }

    templateNote(i) {
        let note = "<div class='note' id='note_"+ i +"'>" +
                                   "<header class='flex'>" +
                                       "<div class='edits'>" +
                                           "<i class='fas fa-pencil-alt c-orange edit'></i>" +
                                           "<i class='far fa-trash-alt c-red delete'></i>" +
                                           "<i class='fas fa-check c-green save'></i>" +
                                       "</div>" +
                                   "</header>" +
                                   "<textarea placeholder='Nova Nota'></textarea>" +
                               "</div>";

        $(".box-single-notes").append(note);
    }

    clickNote() {
        $.each($(".note"), function(i, e){
            $(e).find(".delete").on("click", function() {
                $(this).parents(".note").fadeOut(600, function(){
                    $(this).remove();
                });
            });
        });

        $.each($(".note"), function(i, e){
            $(e).find(".save").on("click", function() {
                if($(this).hasClass("saved")) {
                    $(this).stop().end();
                    $(this).siblings("i").fadeIn(600);
                    $(this).removeClass("saved");
                    $(this).parents(".note").find("textarea").prop("disabled", false);
                } else {
                    $(this).stop().end();
                    $(this).siblings("i").fadeOut(600);
                    $(this).addClass("saved");
                $(this).parents(".note").find("textarea").prop("disabled", true);
                }
            });
        });

        $.each($(".note"), function(i, e){
            $(e).find(".edit").on("click", function() {
                $(this).parents(".note").find("textarea").focus();
                console.log($(this).parents(".note").find("textarea").val());
            });
        });


    }
}
