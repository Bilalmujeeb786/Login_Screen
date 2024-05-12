import React from 'react';
import logo from './images/logo.png';  // Ensure logo.svg is correctly imported
import userProfile from './images/user.png';  // Ensure user.png is correctly imported

function App() {
  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
    },
    form: {
      width: '100%',
      maxWidth: '360px',
      padding: '20px',
      background: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      textAlign: 'center',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    logo: {
      maxWidth: '120px',
      margin: '0 auto',
    },
    profilePic: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      margin: '0 auto',
      objectFit: 'cover',
    },
    loginText: {
      color: '#0F4C9E',  // Updated color to navy blue
      margin: '5px auto 20px',  // Reduced top margin to bring the text closer to the image
      fontSize: '25px',  // Increased font size
    },
    inputContainer: {
      width: '100%',  
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',  
    },
    input: {
      width: 'calc(100% - 40px)',  
      padding: '12px 20px',  
      border: '1px solid #ccc',
      borderRadius: '20px',
      fontSize: '16px',
      marginBottom: '8px',
    },
    button: {
      width: '80%',
      padding: '15px 10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '18px',
      margin: '10px auto',  
    },
    forgotPasswordButton: {
      background: 'none',
      color: '#007bff',
      border: 'none',
      padding: '0',
      fontSize: '14px',
      cursor: 'pointer',
      textDecoration: 'underline',
      margin: '0 auto',  
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <img src={userProfile} alt="Profile" style={styles.profilePic} />
        <div style={styles.loginText}>Login</div>  {/* "Log In" text styled as per requirements */}
        <div style={styles.inputContainer}>
          <input type="text" placeholder="Username" required style={styles.input} />
          <input type="password" placeholder="Password" required style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Sign in</button>
        <button type="button" style={styles.forgotPasswordButton} onClick={() => console.log('Forgot Password?')}>
          Forgot your password?
        </button>
      </div>
    </div>
  );
}

export default App;
