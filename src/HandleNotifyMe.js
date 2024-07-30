const handleNotifyMeSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email }),
      });
  
      if (response.ok) {
        console.log('Data sent successfully');
        alert('Thank you! You will be notified.');
        // Clear the form or handle as necessary
        setName('');
        setPhone('');
        setEmail('');
      } else {
        console.error('Failed to send data');
        alert('Failed to submit your information.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting your information.');
    }
  
    setIsNotifyMeFormVisible(false); // Close the form
  };
  