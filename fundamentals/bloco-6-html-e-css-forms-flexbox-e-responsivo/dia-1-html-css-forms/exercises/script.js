function buildStatesOptions(states) {
  const statesContainer = document.querySelector('#estado');
  let options = '';

  for (let i = 0; i < states.length; i += 1){
    options += `
      <option value="${states[i].value}">${states[i].label}</option>
    `;
  }

  statesContainer.innerHTML = options;
}

const states = [
  { 
    value: 'AC', 
    label: 'Acre',
  },
  { 
    value: 'AL', 
    label: 'Alagoas',
  },
  { 
    value: 'AP', 
    label: 'Amapá',
  },
  { 
    value: 'AM', 
    label: 'Amazonas', 
  },
  { 
    value: 'BA', 
    label: 'Bahia', 
  },
  { 
    value: 'CE', 
    label: 'Ceará', 
  },
  { 
    value: 'DF', 
    label: 'Distrito Federal', 
  },
  { 
    value: 'ES', 
    label: 'Espírito Santo', 
  },
  { 
    value: 'GO', 
    label: 'Goías', 
  },
  { 
    value: 'MA', 
    label: 'Maranhão', 
  },
  { 
    value: 'MT', 
    label: 'Mato Grosso', 
  },
  { 
    value: 'MS', 
    label: 'Mato Grosso do Sul', 
  },
  { 
    value: 'MG', 
    label: 'Minas Gerais', 
  },
  { 
    value: 'PA', 
    label: 'Pará', 
  },
  { 
    value: 'PB', 
    label: 'Paraíba', 
  },
  { 
    value: 'PR', 
    label: 'Paraná', 
  },
  { 
    value: 'PE', 
    label: 'Pernambuco', 
  },
  { 
    value: 'PI', 
    label: 'Piauí', 
  },
  { 
    value: 'RJ', 
    label: 'Rio de Janeiro', 
  },
  { 
    value: 'RN', 
    label: 'Rio Grande do Norte', 
  },
  { 
    value: 'RS', 
    label: 'Rio Grande do Sul', 
  },
  { 
    value: 'RO', 
    label: 'Rondônia', 
  },
  { 
    value: 'RR', 
    label: 'Roraíma', 
  },
  { 
    value: 'SC', 
    label: 'Santa Catarina', 
  },
  { 
    value: 'SP', 
    label: 'São Paulo', 
  },
  { 
    value: 'SE', 
    label: 'Sergipe', 
  },
  { 
    value: 'TO', 
    label: 'Tocantins', 
  }
]

buildStatesOptions(states);
