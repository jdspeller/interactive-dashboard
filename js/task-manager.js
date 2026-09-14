function weeklyGoal(userName, dailyGoal, bonusTasks) {
let calculatedWeeklyGoal = dailyGoal * 5;
let totalGoal = Number(calculatedWeeklyGoal) + Number(bonusTasks);
let output = `Hello ${userName}! Your daily target is ${dailyGoal} tasks. With a weekly baseline of ${calculatedWeeklyGoal} tasks and ${bonusTasks} bonus tasks, your total weekly goal is ${totalGoal} tasks.`;
document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-btn").addEventListener("click", function(event) {
event.preventDefault();
    let user = document.getElementById("userName").value;
    let daily = document.getElementById("dailyGoal").value;
    let bonus = document.getElementById("bonusTasks").value;
    weeklyGoal(user, daily, bonus);
});
