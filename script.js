// script.js
document.getElementById('calculate').addEventListener('click', function() {
    const totalCredits = parseInt(document.getElementById('totalCredits').value);
    const completedCredits = parseInt(document.getElementById('completedCredits').value);

    if (isNaN(totalCredits) || isNaN(completedCredits)) {
        alert('Please enter valid numbers.');
        return;
    }

    const percentage = (completedCredits / totalCredits) * 100;
    document.getElementById('result').innerText = `You have completed ${percentage.toFixed(2)}% of your degree.`;

    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                label: 'Credits',
                data: [completedCredits, totalCredits - completedCredits],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
});
