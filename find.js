function showTutorInfo(name) {
  const tutorName = document.getElementById('tutor-name');
  const tutorContact = document.getElementById('tutor-contact');
  const infoSection = document.getElementById('tutor-info');

  const tutors = {
    john: {
      name: 'John Banda',
      contact: 'Phone: +260 970 000 001 | Email: johnbanda@gmail.com',
    },
    mary: {
      name: 'Mary Chileshe',
      contact: 'Phone: +260 970 000 002 | Email: marychileshe@gmail.com',
    },
    frank: {
      name: 'Frank Kafweku III',
      contact: 'Phone: +260 970 304 009 | Email: frankkafweku84@gmail.com',
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
