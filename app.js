    
        let numeroAtual = localStorage.getItem('numeroNota') ? parseInt(localStorage.getItem('numeroNota')) : 1;
        document.getElementById('numeroNota').textContent = numeroAtual;

        function gerarPDF() {
            
            const numeroNota = numeroAtual; 
            const conteudo = document.getElementById('conteudo').value;
            const pesoBruto = document.getElementById('pesoBruto').value;
            const pesoLiquido = document.getElementById('pesoLiquido').value;
            const valorNota = document.getElementById('valorNota').value;
            const valorLiquido = document.getElementById('valorLiquido').value;
            const quantidade = document.getElementById('quantidade').value

            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.text(`Número da nota: ${numeroNota}`, 10, 10);
            doc.text(`Conteúdo: ${conteudo}`, 10, 20);
            doc.text(`Peso bruto: ${pesoBruto}`, 10, 30);
            doc.text(`Peso líquido: ${pesoLiquido}`, 10, 40);
            doc.text(`Valor da nota: ${valorNota}`, 10, 50);
            doc.text(`Valor líquido: ${valorLiquido}`, 10, 60);
            doc.text(`Quantidade: ${quantidade}`, 10, 70)

            doc.save(`nota_fiscal_${numeroNota}.pdf`);

            
            numeroAtual += 1;
            localStorage.setItem('numeroNota', numeroAtual);
            document.getElementById('numeroNota').textContent = numeroAtual;
        }