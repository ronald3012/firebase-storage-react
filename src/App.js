import './App.css';
import { db, storage } from './firebase';
import { useEffect, useState } from 'react';

function App() {
  const [datos, setDatos] = useState([]);
  const [image , setImage] = useState('');

  useEffect(() => {
    db.collection('pruebas')
      .onSnapshot(querySnapshot => {
        const docs = [];
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(),id:doc.id});

        })
        setDatos(docs);
      });

  }, [db]);


  const handleAdd = () => {
    let data = prompt('Que deseas agregar?');
    db.collection('pruebas').doc().set({name:data})
  }

  const handleRemove = (id) => {
    db.collection('pruebas').doc(id).delete();
  }


  const upload = ()=>{
    if(image == null)
      return;
    storage.ref(`/images/${image.name}`).put(image)
    .on("state_changed" , alert("success") , alert);
  }


  return (
    <div className="App">
      <header className="App-header">
       {
         datos.map(d => <p key={Math.random()}>{d.name} <button onClick={()=>handleRemove(d.id)}>Eliminar</button></p>)
       }
        <button style={{background:'red',padding:'5px 15px', borderRadius:'10px', color:'#fff'}} onClick={handleAdd}>Agregar</button>
<br />
        <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
<br />
      <button style={{background:'red',padding:'5px 15px', borderRadius:'10px', color:'#fff'}} onClick={upload}>Upload</button>
      </header>
    </div>
  );
}

export default App;
