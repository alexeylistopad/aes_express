const destination = document.getElementById('destination');
const point_departure = document.getElementById('point_departure');
const form_list = document.getElementById('form_list');
const frame = document.getElementById('frame');
const inputs = document.getElementsByClassName('inputs')[0];

var input_check = null;

const elements_list = document.getElementsByClassName("el_list");
for (var i = 0; i < elements_list.length; i++) {
  elements_list[i].onclick = function(){
    if (input_check == 'point_departure') {
    	point_departure.value = this.innerHTML;
    	form_list.style.display = 'none';
    }else if (input_check == 'destination') {
    	destination.value = this.innerHTML;
    	form_list.style.display = 'none';
    }
  }
}

destination.addEventListener('input', input_update);
point_departure.addEventListener('input', input_update);

function input_update(e) {
	
	var value = e.target.value;

	if (value.length >= 2) {

		form_list.style.top = e.target.offsetTop + 45 + 'px';
		form_list.style.left = e.target.offsetLeft + 'px';

		form_list.style.width = e.target.offsetWidth - 1 + 'px';

		form_list.style.display = 'block';

		if (form_list.offsetHeight > inputs.offsetHeight) {
			form_list.style.height = (inputs.offsetHeight - form_list.offsetTop) + 'px';
		}
	}else{
		form_list.style.display = 'none';
	}

	input_check = e.target.id;

	console.log(input_check);
}

document.onclick = function(e){
    if ( event.target.id != 'form_list' ) {
        form_list.style.display = 'none';
    };
};