import logo from './logo.svg';
import './App.css';
import Quiz from './pages/quiz';
import React, { Component, useEffect,useCallback } from 'react';
// import Intro from './pages/intro';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCus from './components/navbar';
import database from './database/firestore';
import {collection, query, where, doc, setDoc, getDocs, orderBy, QuerySnapshot, Firestore, deleteField } from "firebase/firestore";


function App() {
  
      // console.log(data);
      // console.log(id);
/*       async function fetchData (){
 */              // let memberdata = [];
        // const q = query(collection(database, "member"))
        //  getDocs(q). then ((querySnapshot)=>{
        //   querySnapshot.forEach((doc)=> {
        //   let data = doc.data();
        //   let id = doc.id
        //       memberdata.push({name: doc.data().name, id: doc.id});
        //       console.log (memberdata);
        //   });
/*         await setDoc(doc(database,"member","member2"),{
          name: "mamber2",
          mobile:"392757293"
        });
      }; */
      
      const memberRef = doc(database, 'member', 'member2');
 /*      setDoc(memberRef,{name:'member2',mobile:'523342'}); */
/* 
      await updaateDoc(memberRef,{
        name: deleteField()
      }) */
      // }, []);
      // useEffect(()=>{
           //  fetchData();
        
      // },[fetchData]);


    
  return (
    <div className="App">
        <NavbarCus/>
    </div>
  );
}

export default App;
