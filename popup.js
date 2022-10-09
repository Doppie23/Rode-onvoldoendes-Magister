// Saves options to storage
function save_options() {
    var Check = document.getElementById('opdrachten').checked;
    storage.local.set({
      Checked: Check
    }, function() {
        console.log('checkbox naar' + Check)


        var status = document.getElementById('status');
        status.textContent = 'Opgeslagen.';
        setTimeout(function() {
        status.textContent = '';
        }, 750);
    });
  }

function restore_options() {
// Use default value color = 'red' and likesColor = true.
storage.local.get({
    Checked: true
}, function(items) {
    document.getElementById('opdrachten').checked = items.Checked;
    console.log(items.Checked)
});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#opdrachten').addEventListener('change', changeHandler);
});