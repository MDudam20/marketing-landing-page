
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
      const target = document.querySelector(this.dataset.target);
      const currentlyActiveHeader = document.querySelector('.accordion-header.is-active');
      const currentlyActiveContent = document.querySelector('.accordion-content.is-active');
      const arrow = this.querySelector('.arrow');
      const currentlyActiveArrow = currentlyActiveHeader ? currentlyActiveHeader.querySelector('.arrow') : null;

      if (currentlyActiveHeader) {
          currentlyActiveHeader.classList.remove('is-active');
      }
      if (currentlyActiveContent) {
          currentlyActiveContent.classList.remove('is-active');
          currentlyActiveContent.style.display = 'none';
      }
      if (currentlyActiveArrow) {
          currentlyActiveArrow.classList.remove('up');
          currentlyActiveArrow.classList.add('down');
      }

      if (currentlyActiveContent !== target) {
          this.classList.add('is-active');
          target.classList.add('is-active');
          target.style.display = 'block';
          arrow.classList.remove('down');
          arrow.classList.add('up');
      }
  });
});
