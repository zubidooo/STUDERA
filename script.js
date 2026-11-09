document.addEventListener("DOMContentLoaded", () => {
    
  // Find the button now that the HTML has fully finished loading
  document.getElementById("checkAnswersBtn").addEventListener("click", () => {
      
      // --- QUESTION 1 ---
      if (document.getElementById("q1").value === "Pangea var en superkontinent.") {
          document.getElementById("r1").style.display = "inline";
          document.getElementById("f1").style.display = "none";
      } else {
          document.getElementById("r1").style.display = "none";
          document.getElementById("f1").style.display = "inline";
          document.getElementById("f1").innerText = "Fel ❌ Rätt svar: Pangea var en superkontinent.";
      }

      // --- QUESTION 2 ---
      if (document.getElementById("q2").value === "Naturlandskap är orört men kulturlandskap är påverkat av människor.") {
          document.getElementById("r2").style.display = "inline";
          document.getElementById("f2").style.display = "none";
      } else {
          document.getElementById("r2").style.display = "none";
          document.getElementById("f2").style.display = "inline";
          document.getElementById("f2").innerText = "Fel ❌ Rätt svar: Naturlandskap är orört men kulturlandskap är påverkat av människor.";
      }

      // --- QUESTION 3 ---
      if (document.getElementById("q3").value === "Ishavet, Atlanten och Medelhavet.") {
          document.getElementById("r3").style.display = "inline";
          document.getElementById("f3").style.display = "none";
      } else {
          document.getElementById("r3").style.display = "none";
          document.getElementById("f3").style.display = "inline";
          document.getElementById("f3").innerText = "Fel ❌ Rätt svar: Ishavet, Atlanten och Medelhavet.";
      }

      // --- QUESTION 4 ---
      if (document.getElementById("q4").value === "Det innebär att resursen aldrig tar slut utan förnyas hela tiden, till exempel solenergi.") {
          document.getElementById("r4").style.display = "inline";
          document.getElementById("f4").style.display = "none";
      } else {
          document.getElementById("r4").style.display = "none";
          document.getElementById("f4").style.display = "inline";
          document.getElementById("f4").innerText = "Fel ❌ Rätt svar: Det innebär att resursen aldrig tar slut utan förnyas hela tiden, till exempel solenergi.";
      }

      // --- QUESTION 5 ---
      if (document.getElementById("q5").value === "Den för med sig varmt vatten som gör att klimatet blir mycket mildare och varmare.") {
          document.getElementById("r5").style.display = "inline";
          document.getElementById("f5").style.display = "none";
      } else {
          document.getElementById("r5").style.display = "none";
          document.getElementById("f5").style.display = "inline";
          document.getElementById("f5").innerText = "Fel ❌ Rätt svar: Den för med sig varmt vatten som gör att klimatet blir mycket mildare och varmare.";
      }

      // --- QUESTION 6 ---
      if (document.getElementById("q6").value === "Marken pressas uppåt och det bildas en veckbergskedja.") {
          document.getElementById("r6").style.display = "inline";
          document.getElementById("f6").style.display = "none";
      } else {
          document.getElementById("r6").style.display = "none";
          document.getElementById("f6").style.display = "inline";
          document.getElementById("f6").innerText = "Fel ❌ Rätt svar: Marken pressas uppåt och det bildas en veckbergskedja.";
      }

      // --- QUESTION 7 ---
      if (document.getElementById("q7").value === "Det kallas permafrost och man hittar det på tundran.") {
          document.getElementById("r7").style.display = "inline";
          document.getElementById("f7").style.display = "none";
      } else {
          document.getElementById("r7").style.display = "none";
          document.getElementById("f7").style.display = "inline";
          document.getElementById("f7").innerText = "Fel ❌ Rätt svar: Det kallas permafrost och man hittar det på tundran.";
      }

      // --- QUESTION 8 ---
      if (document.getElementById("q8").value === "Uralbergen och Uralfloden.") {
          document.getElementById("r8").style.display = "inline";
          document.getElementById("f8").style.display = "none";
      } else {
          document.getElementById("r8").style.display = "none";
          document.getElementById("f8").style.display = "inline";
          document.getElementById("f8").innerText = "Fel ❌ Rätt svar: Uralbergen och Uralfloden.";
      }

      // --- QUESTION 9 ---
      if (document.getElementById("q9").value === "Vatten rinner ner i sprickor, fryser till is, expanderar och spränger sönder berget.") {
          document.getElementById("r9").style.display = "inline";
          document.getElementById("f9").style.display = "none";
      } else {
          document.getElementById("r9").style.display = "none";
          document.getElementById("f9").style.display = "inline";
          document.getElementById("f9").innerText = "Fel ❌ Rätt svar: Vatten rinner ner i sprickor, fryser till is, expanderar och spränger sönder berget.";
      }

      // --- QUESTION 10 ---
      if (document.getElementById("q10").value === "Vittring bryter ner materialet på plats medan erosion också transporterar bort det.") {
          document.getElementById("r10").style.display = "inline";
          document.getElementById("f10").style.display = "none";
      } else {
          document.getElementById("r10").style.display = "none";
          document.getElementById("f10").style.display = "inline";
          document.getElementById("f10").innerText = "Fel ❌ Rätt svar: Vittring bryter ner materialet på plats medan erosion också transporterar bort det.";
      }

      // --- Question 11 ---
      if (document.getElementById("q11").value === "Skogen höggs ner för betesmark och getter/får betade sönder ny skog. Buskvegetationen kallas macchia."){
        document.getElementById("r11").style.display = "inline;"
        document.getElementById("f11").style.display = "none";
    }
    else

  });
});
