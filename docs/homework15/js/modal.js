
  const openModalBtn = document.querySelector('.commerce__bot-btn');
  const modal = document.getElementById('consult-modal');
  const closeModalBtn = modal.querySelector('.modal__close');

  function openModal() {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden'; // блокируем скролл страницы
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  // закрытие по клику по фону
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal__overlay')) {
      closeModal();
    }
  });

  // закрытие по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });