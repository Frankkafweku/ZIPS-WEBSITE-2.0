function showTutorInfo(name) {
  const tutorName = document.getElementById('tutor-name');
  const tutorContact = document.getElementById('tutor-contact');
  const infoSection = document.getElementById('tutor-info');

  const tutors = {
    death: {
      name: 'Mr. Banda',
      contact: 'Phone: 0772692888 | Email: banda@gmail.com',
    },
    prosper: {
      name: 'Prosper Chisabi',
      contact: 'Phone: 0776336000 | Email: @gmail.com',
    },
    salt: {
      name: 'Salt tutorials',
      contact: 'Phone: 0964736805 | Email: @gmail.com',
    },
  };

  const tutor = tutors[name];
  if (tutor) {
    tutorName.textContent = tutor.name;
    tutorContact.textContent = tutor.contact;
    infoSection.classList.remove('hidden');
    infoSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function closeTutorInfo() {
  document.getElementById('tutor-info').classList.add('hidden');
}
