/* Huy SÀI GÒN — main.js */

// ---------- Mobile Nav Toggle ----------
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ---------- Active nav link ----------
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(link => {
  const href = link.getAttribute('href');
  link.classList.toggle('active', href === currentPage || (currentPage === '' && href === 'index.html'));
});

// ---------- Form: Live Range Output ----------
const ratingRange  = document.getElementById('ambiance-rating');
const ratingOutput = document.getElementById('rating-output');
if (ratingRange && ratingOutput) {
  const update = () => { ratingOutput.textContent = `${ratingRange.value} / 10`; };
  ratingRange.addEventListener('input', update);
  update();
}

// ---------- Form: Progress bar (fill as fields completed) ----------
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  const allInputs = bookingForm.querySelectorAll(
    'input:not([type="hidden"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]), select, textarea'
  );
  const progressBar = document.getElementById('form-progress');

  const updateProgress = () => {
    if (!progressBar) return;
    const filled = [...allInputs].filter(i => i.value.trim() !== '').length;
    const pct = Math.round((filled / allInputs.length) * 100);
    progressBar.value = pct;
  };

  allInputs.forEach(i => i.addEventListener('input', updateProgress));
  updateProgress();
}

// ---------- Form: Friendly Inline Error Messages ----------
const formFields = document.querySelectorAll('input, select, textarea');
formFields.forEach(field => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    if (field.classList.contains('touched')) validateField(field);
  });
});

function validateField(field) {
  field.classList.add('touched');
  const errorEl = field.parentElement.querySelector('.error-msg');
  if (!errorEl) return;

  if (field.validity.valueMissing) {
    errorEl.textContent = 'This field is required.';
    errorEl.style.display = 'block';
  } else if (field.validity.typeMismatch) {
    errorEl.textContent = `Please enter a valid ${field.type}.`;
    errorEl.style.display = 'block';
  } else if (field.validity.patternMismatch) {
    errorEl.textContent = field.dataset.errorPattern || 'Invalid format.';
    errorEl.style.display = 'block';
  } else if (field.validity.rangeUnderflow || field.validity.rangeOverflow) {
    errorEl.textContent = `Value must be between ${field.min} and ${field.max}.`;
    errorEl.style.display = 'block';
  } else {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }
}

// ---------- Form submit: prevent if invalid ----------
if (bookingForm) {
  bookingForm.addEventListener('submit', e => {
    let valid = true;
    bookingForm.querySelectorAll('input[required], select[required], textarea[required]').forEach(f => {
      validateField(f);
      if (!f.validity.valid) valid = false;
    });
    if (!valid) {
      e.preventDefault();
      bookingForm.querySelector(':invalid')?.focus();
    } else {
      e.preventDefault();
      alert('🎉 Your reservation request has been received! We will confirm within 24 hours.');
      bookingForm.reset();
      const progressBar = document.getElementById('form-progress');
      if (progressBar) progressBar.value = 0;
      const ratingOutput = document.getElementById('rating-output');
      if (ratingOutput) ratingOutput.textContent = '5 / 10';
    }
  });
}
