document.addEventListener('DOMContentLoaded', function() {
  const stateSelect = document.getElementById('state');
  const cityContainer = document.getElementById('cityContainer');
  
  stateSelect.addEventListener('change', function() {
    const selectedState = this.value;
    
    // Clear the current city input/select
    cityContainer.innerHTML = '';
    
    if (selectedState && citiesByState[selectedState]) {
      // Create a select element for cities
      const citySelect = document.createElement('select');
      citySelect.setAttribute('id', 'city');
      citySelect.setAttribute('name', 'city');
      citySelect.setAttribute('required', 'required');
      
      // Add default option
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.text = 'Selecione a Cidade';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      citySelect.appendChild(defaultOption);
      
      // Add cities for the selected state
      citiesByState[selectedState].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.text = city;
        citySelect.appendChild(option);
      });
      
      // Add the select to the container
      cityContainer.appendChild(citySelect);
    } else {
      // If no state is selected or no cities data, show text input
      const cityInput = document.createElement('input');
      cityInput.setAttribute('type', 'text');
      cityInput.setAttribute('id', 'city');
      cityInput.setAttribute('name', 'city');
      cityInput.setAttribute('required', 'required');
      cityContainer.appendChild(cityInput);
    }
  });
});
