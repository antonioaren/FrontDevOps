

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}


// $('button').click(function (event){
//     event.preventDefault();
//     $('#exampleInputFile').fileupload({
//         dataType: 'json',
//         done: function (e, data) {
//             $.each(data.result.files, function (index, file) {
//                 $('<p/>').text(file.name).appendTo(document.body);
//             });
//         }
//     });
    
    // let file = $("#exampleInputFile").fileupload({
    //     url: 'C:/Users/Yoel/Desktop',
    //     sequentialUploads: true
    // });
    // console.log(file);

    // $.ajax({
    //     url: "/users",
    //     type: 'POST',
    //     data: JSON.stringify(user),
    //     contentType: 'application/json',
    //     dataType: 'json',

    // }).then(correctInfo).then(displayAll).catch(err => {
    //     console.log('Error de comunicación');

    // })
// });

