function carregarDadosDoCaso() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const caso = casesData.find(c => c.id === id);

  if (!caso) {
    document.getElementById('display-id').innerText = 'Não encontrado';
    return;
  }

  // IDs / breadcrumb
  document.getElementById('breadcrumb-id').innerText = caso.id;
  document.getElementById('display-id').innerText = caso.id;
  document.getElementById('info-ref').innerText = caso.id;

  // Data / status
  document.getElementById('info-date').innerText = caso.date;
  document.getElementById('info-status').innerText = caso.statusText;

  // Viewer
  document.getElementById('main-3d-image').src = caso.thumb;

  // Informações do caso
  document.getElementById('info-model').innerText = caso.tipoModelo;

  // Laudo
  document.querySelector(
    'label:contains("Laudo")'
  )?.nextElementSibling.innerText = caso.laudo;

  // Equipe
  document.querySelector(
    'label:contains("Equipe")'
  )?.nextElementSibling.innerText = caso.equipe;

  // Vencimento
  document.querySelector(
    'label:contains("Data de vencimento")'
  )?.nextElementSibling.innerText = caso.vencimento;

  // Notas
  document.querySelector(
    'label:contains("Notas do caso")'
  )?.nextElementSibling.innerText = caso.notas;
}
