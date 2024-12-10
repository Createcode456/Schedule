
$(document).ready(function (){
    const scheduleContainer = $('#scheduleList');
    const btn = $('#submitDay');


    btn.on('click', function () {


        //Valdidate the input

        let selectedDay = $('#dayInput').val().trim().toUpperCase()
        console.log(selectedDay)

        if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
            alert('You need to type a valid letter day!');
            return;
        }

        else {
            $.ajax({
                url: 'https://api.npoint.io/60349e87a180147a9a46',
                method: 'GET',
                success: function (data) {

                    const schedule = data.schedule;
                    console.log(schedule);
                    const daySchedule = schedule.filter(item => item.days.includes(selectedDay));
                    console.log(daySchedule);
                    renderHTML(daySchedule);




                },
            });

        }

        function renderHTML(daySchedule) {
            $("#scheduleList").empty()
            var htmlString = "";
            daySchedule.forEach(function (classItem) {

                htmlString += `
                    <tr>
                    <td>${classItem.period}</td>
                    <td>${classItem.class}</td>
                    <td class="name" >${classItem.teacher}</td>
                    <td>${classItem.room}</td>
                   </tr> `;

            });

            $('#scheduleList').append(htmlString);
        }
    });

  



});

