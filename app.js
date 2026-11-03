const data=[
  {
    "en": "Which of the following commands will set the sticky bit on /shared?",
    "ru": "Какая команда устанавливает sticky bit для /shared?",
    "topic": "Права",
    "options": [
      {
        "text": "chmod 2777 /shared",
        "correct": false,
        "why": "2 — setgid, а sticky bit — 1."
      },
      {
        "text": "chmod 1777 /shared",
        "correct": true,
        "why": "1 включает sticky bit; 777 даёт rwx всем."
      },
      {
        "text": "chmod 4777 /shared",
        "correct": false,
        "why": "4 включает setuid."
      },
      {
        "text": "chmod 6777 /shared",
        "correct": false,
        "why": "6 = 4 + 2: setuid и setgid, без sticky bit."
      }
    ],
    "ex": "Sticky bit в общем каталоге ограничивает удаление и переименование записей: это может сделать владелец файла, владелец каталога или root. Он не запрещает запись в содержимое файла, если права её разрешают."
  },
  {
    "en": "The setgid permission…",
    "ru": "Что делает setgid? Выбери два ответа.",
    "topic": "Права",
    "options": [
      {
        "text": "allows files created in a directory to be owned by the group that owns the directory.",
        "correct": true,
        "why": "Новые файлы наследуют группу каталога."
      },
      {
        "text": "prevents the group owner of a file from being changed",
        "correct": false,
        "why": "Setgid не запрещает смену группы."
      },
      {
        "text": "can only be set on files",
        "correct": false,
        "why": "Setgid бывает у файлов и каталогов."
      },
      {
        "text": "allows a command to be run as the group owner of the file",
        "correct": true,
        "why": "У исполняемого файла используется эффективная группа владельца. Для обычных shell-скриптов Linux обычно игнорирует этот бит."
      }
    ],
    "ex": "На каталоге setgid означает наследование группы. На исполняемом файле — запуск с эффективным GID группы файла."
  },
  {
    "en": "Which of the following commands will set the setgid permission on /shared?",
    "ru": "Какой вариант устанавливает setgid для /shared?",
    "topic": "Права",
    "options": [
      {
        "text": "chmod 7777 /shared",
        "correct": false,
        "why": "Технически тоже включает setgid, но вместе с setuid и sticky bit. В этой попытке ожидается 2777."
      },
      {
        "text": "chmod 4777 /shared",
        "correct": false,
        "why": "4 — setuid."
      },
      {
        "text": "None of these options are correct",
        "correct": false,
        "why": "Подходит 2777."
      },
      {
        "text": "chmod 2777 /shared",
        "correct": true,
        "why": "2 — setgid."
      },
      {
        "text": "chmod 1777 /shared",
        "correct": false,
        "why": "1 — sticky bit."
      }
    ],
    "ex": "Запомни: 4 = setuid, 2 = setgid, 1 = sticky bit. Вопрос сформулирован неоднозначно: 7777 также содержит setgid, но добавляет другие специальные биты."
  },
  {
    "en": "Which of the following long listings indicates that the setgid permission has been set on /shared?",
    "ru": "В какой строке показан setgid у /shared?",
    "topic": "Права",
    "options": [
      {
        "text": "drwxrwsrwx. 12 root group 4096 Oct 21 13:12 /shared",
        "correct": true,
        "why": "s стоит на месте x группы."
      },
      {
        "text": "drwSrwxrwx. 12 root group 4096 Oct 21 13:12 /shared",
        "correct": false,
        "why": "S в блоке владельца — setuid без x владельца."
      },
      {
        "text": "drwxrwxrws. 12 root group 4096 Oct 21 13:12 /shared",
        "correct": false,
        "why": "Позиция специальных прав для остальных — sticky bit, там используют t/T. Это не корректная запись setgid."
      },
      {
        "text": "drwsrwxrwx. 12 root group 4096 Oct 21 13:12 /shared",
        "correct": false,
        "why": "s в блоке владельца — setuid."
      }
    ],
    "ex": "После d идут три блока: владелец rwx, группа rwx, остальные rwx. setgid виден как s/S в третьей позиции блока группы: s с выполнением, S без выполнения."
  },
  {
    "en": "Setting setgid on a directory…",
    "ru": "Что происходит при установке setgid на каталог?",
    "topic": "Права",
    "options": [
      {
        "text": "does nothing",
        "correct": false,
        "why": "Меняется наследование группы."
      },
      {
        "text": "will allow scripts in the directory to be executed as the group owner of the directory",
        "correct": false,
        "why": "Setgid каталога не задаёт группу запуска скриптов."
      },
      {
        "text": "is not allowed",
        "correct": false,
        "why": "Это разрешено."
      },
      {
        "text": "will set the group owner of all files created in the directory to the group owner of the directory",
        "correct": true,
        "why": "Новые файлы получают группу каталога."
      }
    ],
    "ex": "Setgid влияет на вновь созданные файлы; группу уже существующих файлов он сам по себе не изменяет."
  },
  {
    "en": "A source file and a hard link must be on the same filesystem. True or False?",
    "ru": "Исходный файл и жёсткая ссылка должны быть в одной файловой системе?",
    "topic": "Ссылки",
    "options": [
      {
        "text": "True",
        "correct": true,
        "why": "Оба имени указывают на один inode внутри одной файловой системы."
      },
      {
        "text": "False",
        "correct": false,
        "why": "Жёсткая ссылка не пересекает границу файловых систем."
      }
    ],
    "ex": "ln original.txt hard.txt создаёт ещё одно имя того же файла. При удалении исходного имени данные сохраняются, пока остаются другие жёсткие ссылки (или файл открыт процессом)."
  },
  {
    "en": "Deleting a source file will break a symbolic link. True or False?",
    "ru": "Если удалить исходный файл, символическая ссылка перестанет работать?",
    "topic": "Ссылки",
    "options": [
      {
        "text": "True",
        "correct": true,
        "why": "Путь назначения больше не существует — ссылка становится dangling, или «битой»."
      },
      {
        "text": "False",
        "correct": false,
        "why": "Символическая ссылка не сохраняет содержимое исходного файла."
      }
    ],
    "ex": "ln -s original.txt sym.txt хранит путь к цели. Если по этому пути снова создать файл, ссылка снова сможет его открыть."
  },
  {
    "en": "A source file and a symbolic link must be on the same filesystem. True or False?",
    "ru": "Символическая ссылка должна быть в той же файловой системе, что и цель?",
    "topic": "Ссылки",
    "options": [
      {
        "text": "True",
        "correct": false,
        "why": "Символическая ссылка может указывать на другой раздел."
      },
      {
        "text": "False",
        "correct": true,
        "why": "Она хранит путь, а не общий inode."
      }
    ],
    "ex": "Символическая ссылка может указывать на файл, каталог и даже пока несуществующий путь. Относительный путь считается от каталога самой ссылки."
  },
  {
    "en": "Which of the following commands will display information about the directory itself rather than its contents?",
    "ru": "Какие команды показывают сам каталог, а не его содержимое? Выбери два ответа.",
    "topic": "Каталоги",
    "options": [
      {
        "text": "ld -a",
        "correct": false,
        "why": "В варианте указано ld, а не ls. ld — компоновщик."
      },
      {
        "text": "ls -h",
        "correct": false,
        "why": "-h задаёт удобные единицы размеров; не выбирает сам каталог."
      },
      {
        "text": "ls -d",
        "correct": true,
        "why": "-d выводит сам каталог; по умолчанию это текущий каталог."
      },
      {
        "text": "ls -ld",
        "correct": true,
        "why": "-l — подробный формат, -d — сведения о самом каталоге."
      }
    ],
    "ex": "Пример: ls -ld /tmp показывает владельца и права /tmp. Команда ls -l /tmp показывает содержимое /tmp."
  },
  {
    "en": "Which of the following directories typically allow any user to create temporary files?",
    "ru": "В каких каталогах обычные пользователи обычно создают временные файлы? Выбери два ответа.",
    "topic": "Каталоги",
    "options": [
      {
        "text": "/home",
        "correct": false,
        "why": "Обычно пользователь пишет в своём домашнем каталоге, а не в самом /home."
      },
      {
        "text": "/sbin",
        "correct": false,
        "why": "Системные программы; не каталог временных файлов."
      },
      {
        "text": "/var/tmp",
        "correct": true,
        "why": "Временные файлы, обычно сохраняемые между перезагрузками."
      },
      {
        "text": "/lost+found",
        "correct": false,
        "why": "Каталог восстановления файловой системы."
      },
      {
        "text": "/tmp",
        "correct": true,
        "why": "Временные файлы; часто очищается при загрузке или по расписанию."
      }
    ],
    "ex": "/tmp и /var/tmp обычно доступны для записи всем и имеют sticky bit. Срок хранения зависит от настроек системы."
  }
];
const storageKey='linux-study-ch18-v2';
let selected={},checked=new Set(),revealed=new Set(),current=0,view='practice',storageOK=true;
try{const saved=JSON.parse(localStorage.getItem(storageKey)||'null');if(saved){selected=saved.selected||{};checked=new Set((saved.checked||[]).filter(i=>Number.isInteger(i)&&i>=0&&i<data.length));current=Math.max(0,Math.min(data.length-1,saved.current||0));}}catch{storageOK=false}
const $=id=>document.getElementById(id);
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function isCorrect(i){return data[i].options.every((o,j)=>(selected[i]||[]).includes(j)===o.correct)}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify({selected,checked:[...checked],current}))}catch{storageOK=false}}
function notify(text){$('toast').textContent=text;$('toast').hidden=false;clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('toast').hidden=true,2500)}
function stats(){const total=checked.size,correct=[...checked].filter(isCorrect).length;$('done').textContent=total;$('progress').value=total;$('progress').max=data.length;document.querySelector('.denominator').textContent=' / '+data.length;$('correct-total').textContent='Верно: '+correct;$('remaining').textContent='Осталось: '+(data.length-total);document.querySelector('.rail-title h2').dataset.progress=`${total}/${data.length} проверено`;if(!storageOK)$('save-note').textContent='Сохранение недоступно. Прогресс останется до закрытия страницы.';$('question-nav').innerHTML=data.map((q,i)=>`<button class="${i===current?'current ':''}${checked.has(i)?'checked':''}" data-go="${i}" aria-label="Вопрос ${i+1}${checked.has(i)?', проверен':''}" ${i===current?'aria-current="step"':''}>${i+1}</button>`).join('')}
function questionHTML(i){const q=data[i],open=revealed.has(i),multi=q.options.filter(o=>o.correct).length>1,answer=selected[i]||[];return `<article class="question" id="q${i}"><div class="question-meta"><span>Chapter 18</span><span class="topic">${q.topic}</span><span class="question-number">${i+1} / ${data.length}</span></div><h2 class="q-heading">${esc(q.en)}</h2><p class="ru">${esc(q.ru)}</p><fieldset><legend>${multi?'Выбери два варианта':'Выбери один вариант'}</legend>${q.options.map((o,j)=>`<label class="option ${answer.includes(j)?'chosen ':''}${open?(o.correct?'correct':answer.includes(j)?'mistake':'wrong'):''}"><input type="${multi?'checkbox':'radio'}" name="q${i}" value="${j}" data-q="${i}" ${answer.includes(j)?'checked':''}><span class="option-letter" aria-hidden="true">${String.fromCharCode(65+j)}</span><span class="option-content"><span class="option-text">${esc(o.text)}</span>${open?`<span class="mark">${o.correct?'Правильный ответ':answer.includes(j)?'× Твой ответ неверный':'Неверный вариант'}</span><span class="why">${esc(o.why)}</span>`:''}</span></label>`).join('')}</fieldset><div class="question-actions"><button class="${!open?'primary':''}" data-check="${i}">${open?'Скрыть разбор':'Проверить ответ'}</button><span class="result ${open&&answer.length?(isCorrect(i)?'success':'error'):''}" aria-live="polite">${open?(answer.length?(isCorrect(i)?'Всё верно. Так держать.':'Есть ошибка. Посмотри объяснение ниже.'):'Разбор открыт для изучения.'):'Сначала выбери ответ, затем проверь.'}</span>${!open?`<button class="text-button" data-show="${i}">Сразу открыть разбор</button>`:''}</div>${open?`<div class="explanation"><h3>Что нужно запомнить</h3><p>${esc(q.ex)}</p></div>`:''}</article>`}
function render(){document.body.dataset.view=view;$('study-view').hidden=view==='commands';$('commands').hidden=view!=='commands';$('filterbar').hidden=view!=='all';$('paging').hidden=view!=='practice';document.querySelectorAll('[data-view]').forEach(a=>{const active=a.dataset.view===view;a.classList.toggle('active',active);active?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});if(view==='practice')$('question-list').innerHTML=questionHTML(current);if(view==='all'){const term=$('search').value.trim().toLowerCase(),topic=$('topic').value;const indexes=data.map((q,i)=>i).filter(i=>(!topic||data[i].topic===topic)&&JSON.stringify(data[i]).toLowerCase().includes(term));$('question-list').innerHTML=indexes.length?indexes.map(questionHTML).join(''):'<div class="empty"><h2>Вопросы не найдены</h2><p>Попробуй другое слово или убери фильтр темы.</p><button id="clear-filters">Сбросить поиск</button></div>'}$('prev').disabled=current===0;$('next').disabled=current===data.length-1;$('position').textContent=`Вопрос ${current+1} из ${data.length}`;$('all-answers').textContent=revealed.size===data.length?'Скрыть разборы':'Открыть разборы';stats()}
function gotoQuestion(i){current=i;persist();if(view!=='practice'){location.hash='practice';view='practice'}render();if(innerWidth<761)document.querySelector('.tabs').scrollIntoView({block:'start'});else window.scrollTo({top:0,behavior:'instant'})}
function route(){view=['all','commands'].includes(location.hash.slice(1))?location.hash.slice(1):'practice';render()}
window.addEventListener('hashchange',route);
$('question-nav').addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b)gotoQuestion(+b.dataset.go)});
$('prev').onclick=()=>gotoQuestion(Math.max(0,current-1));$('next').onclick=()=>gotoQuestion(Math.min(data.length-1,current+1));
$('question-list').addEventListener('change',e=>{const input=e.target;if(!input.matches('input[data-q]'))return;const i=+input.dataset.q;selected[i]=[...document.querySelectorAll(`input[name="q${i}"]:checked`)].map(x=>+x.value);checked.delete(i);persist();if(revealed.has(i)){revealed.delete(i);const index=(selected[i]||[]).at(-1);render();document.querySelector(`#q${i} input[value="${index}"]`)?.focus()}else{document.querySelectorAll(`#q${i} .option`).forEach(label=>label.classList.toggle('chosen',label.querySelector('input').checked));stats()}});
$('question-list').addEventListener('click',e=>{const check=e.target.closest('[data-check]'),show=e.target.closest('[data-show]');if(e.target.closest('#clear-filters')){$('search').value='';$('topic').value='';render();return}if(!check&&!show)return;const i=+(check?.dataset.check??show.dataset.show);if(revealed.has(i))revealed.delete(i);else{if(check&&!(selected[i]||[]).length){notify('Выбери хотя бы один вариант.');document.querySelector(`#q${i} input`)?.focus();return}revealed.add(i);if(check)checked.add(i)}persist();render();document.querySelector(`#q${i} [data-check]`)?.focus({preventScroll:true})});
$('search').addEventListener('input',render);$('topic').addEventListener('change',render);
$('all-answers').onclick=()=>{revealed.size===data.length?revealed.clear():data.forEach((q,i)=>revealed.add(i));render()};
$('reset').onclick=()=>{selected={};checked.clear();revealed.clear();current=0;persist();render();notify('Прогресс сброшен. Можно начать заново.')};
let printState=null;
$('print').onclick=()=>{printState={view,revealed:new Set(revealed),search:$('search').value,topic:$('topic').value};view='all';$('search').value='';$('topic').value='';data.forEach((q,i)=>revealed.add(i));render();$('commands').hidden=false;window.print()};
window.addEventListener('afterprint',()=>{if(!printState)return;view=printState.view;revealed=printState.revealed;$('search').value=printState.search;$('topic').value=printState.topic;printState=null;render()});
route();
