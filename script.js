const candidatos = []

function novoCandidato(nome, num, partido) {
    this.nome = nome
    this.num = num
    this.partido = partido 
    this.votos = 0
    candidatos.push(this)
}

const CiroGomes = new novoCandidato("Ciro Gomes", 12,'PDT')
const FelipeDAvila = new novoCandidato("Felipe D'Avila", 30,'Novo')
const JairBolsonaro = new novoCandidato("Jair Bolsonaro", 22, 'PL')
const JoseMariaEymael = new novoCandidato("José Maria Eymael", 27, 'DC')
const LeoPericles = new novoCandidato("Leo Péricles", 80, 'UP')
const Lula = new novoCandidato("Luiz Inácio Lula da Silva", 13, 'PT')
const PabloMarcal = new novoCandidato("Pablo Marçal", 90, 'Pros')
const SimoneTebet = new novoCandidato("Simone Tebet", 15, 'MDB')
const SofiaManzano = new novoCandidato("Sofia Manzano", 21, 'PCB')
const SorayaThronicke = new novoCandidato("Soraya Thronicke", 44, 'UB')
const VeraLucia = new novoCandidato("Vera Lúcia", 16, 'PSTU')
const PadreKelmon = new novoCandidato("Padre Kelmon", 14, 'PTB')

/* PASSOS PARA VOTAÇÃO 
 *  [] - Digitar número
 *  [] - Verificar número
 *      [] - Candidato
 *      [] - Branco
 *      [] - Nulo
 *  [] - Adicionar mais um voto
 *      [] - Caso sim, loop
 *      [] - Caso não, finaliza
 *  [] - Finalizar
 *      [] - Ordenar candidatos
 *  [] - Mostrar resultado
 *      [] - Mostrar número de votos
 *      [] - Mostrar % de votos
 *
 */

// pegar voto por input no HTML
function votacao(voto) {
    
    
    for(let i in candidatos) {
        if(voto === candidatos[i].num) {
            candidatos[i].votos++
            return `Você votou em ${candidatos[i].nome} do partido ${candidatos[i].partido}.`
        } else {
            //error
        }
    }
}
