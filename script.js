const boxes = document.querySelectorAll('.buttons');
const reset = document.querySelector('.reset');
const newgbtn = document.querySelector('.newg');
const msgcontain = document.querySelector('.msg-contain');
const msg = document.querySelector('#msg');
let trun0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (trun0) {
            box.innerText = '0';
            trun0 = false;
        } else {
            box.innerText = 'X';
            trun0 = true;
        }
        box.disabled = true;
        Checkwinner();
    });
});

const resetgame = () => {
    trun0 = true;
    enableboxes(); // Corrected this line
    msgcontain.classList.add('hide');
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
};

const Showwinner = (winner) => {
    msg.innerText = `Winner is ${winner}`; // Corrected this line
    msgcontain.classList.remove('hide');
};

const Checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log('winner');
                Showwinner(pos1val);
            }
        }
    }
};
newgbtn.addEventListener('click',resetgame);
reset.addEventListener('click',resetgame);
