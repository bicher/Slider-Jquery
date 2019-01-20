$(document).ready(() => {
    var arr = [
        {
            url: "images/img_html.jpg",
            name: "pic1"
        },
        {
            url: "images/img_css.jpg",
            name: "pic2"
        },
        {
            url: "images/img_bootstrap.png",
            name: "pic3"
        },
        {
            url: "images/img_js.png",
            name: "pic4"
        },
        {
            url: "images/img_react.jpg",
            name: "pic5"
        },
        {
            url: "images/img_angular.jpg",
            name: "pic6"
        },
        {
            url: "images/node-js_logo.png",
            name: "pic7"
        },
        {
            url: "images/MongoDB.jpg",
            name: "pic8"
        }
    ];

    var counter = 0;

    $("#next").on("click", () => {
        counter++;
        for (var i = 0; i < arr.length; i++) {
            if (counter > 0 && counter < 5) {
                $("#img1").attr("src", arr[counter].url);
                $("#img2").attr("src", arr[counter + 1].url);
                $("#img3").attr("src", arr[counter + 2].url);
                $("#img4").attr("src", arr[counter + 3].url);
            }
            else if (counter == 5) {
                $("#img1").attr("src", arr[counter].url);
                $("#img2").attr("src", arr[counter + 1].url);
                $("#img3").attr("src", arr[counter + 2].url);
                $("#img4").attr("src", arr[counter - 5].url);
            }
            else if (counter == 6) {
                $("#img1").attr("src", arr[counter].url);
                $("#img2").attr("src", arr[counter + 1].url);
                $("#img3").attr("src", arr[counter - 6].url);
                $("#img4").attr("src", arr[counter - 5].url);
            }
            else if (counter == 7) {
                $("#img1").attr("src", arr[counter].url);
                $("#img2").attr("src", arr[counter - 7].url);
                $("#img3").attr("src", arr[counter - 6].url);
                $("#img4").attr("src", arr[counter - 5].url);
            }
            else {
                $("#img1").attr("src", arr[counter - 8].url);
                $("#img2").attr("src", arr[counter - 7].url);
                $("#img3").attr("src", arr[counter - 6].url);
                $("#img4").attr("src", arr[counter - 5].url);
            }


        }
    });

    $("#prev").on("click", () => {
        counter--;
        for (var i = 0; i <= arr.length; i++) {
            if (counter <= 0) {
                counter = arr.length - 1;
                $("#img1").attr("src", arr[counter].url);
                $("#img2").attr("src", arr[counter - 7].url);
                $("#img3").attr("src", arr[counter - 6].url);
                $("#img4").attr("src", arr[counter - 5].url);
            }
            else if (counter == 6) {
                $("#img1").attr("src", arr[counter].url);
                $("#img2").attr("src", arr[counter + 1].url);
                $("#img3").attr("src", arr[counter - 6].url);
                $("#img4").attr("src", arr[counter - 5].url);
            }

            else if (counter == 5) {
                $("#img1").attr("src", arr[counter].url);
                $("#img2").attr("src", arr[counter + 1].url);
                $("#img3").attr("src", arr[counter + 2].url);
                $("#img4").attr("src", arr[counter - 5].url);
            }
            else if (counter < 5) {
                $("#img1").attr("src", arr[counter].url);
                $("#img2").attr("src", arr[counter + 1].url);
                $("#img3").attr("src", arr[counter + 2].url);
                $("#img4").attr("src", arr[counter - 3].url);


            }
            // else  {
            //     $("#img1").attr("src", arr[counter].url);
            //     $("#img2").attr("src", arr[counter + 1].url);
            //     $("#img3").attr("src", arr[counter +2].url);
            //     $("#img4").attr("src", arr[counter -5].url);
            // }

            // else if (counter >0) {
            //     $("#img1").attr("src",arr[counter -1].url);
            //     $("#img2").attr("src",arr[counter - 7 ].url);
            //     $("#img3").attr("src",arr[counter - 6].url);
            //     $("#img4").attr("src",arr[counter - 5].url);
            // }
        };
    });
});
