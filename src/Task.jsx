const Container = () => {
    return (
      <div style={{
        width: '80vw',
        height: '50vh',
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '50%',
          height: '30%',
          backgroundColor: 'lightgreen',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'black'
          }}>
            This is a text inside a small container!
          </div>
        </div>
      </div>
    );
  };
  
  export default Container;
  