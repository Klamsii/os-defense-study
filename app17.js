const chapter=17;
const storageKey="linux-study-ch17-v2";
const data=[
  {
    "en": "Which of the following commands set the other permissions on a file to r-x?",
    "ru": "Какая команда задаёт остальным пользователям права r-x?",
    "topic": "Права",
    "options": [
      {
        "text": "chmod o-r-w file",
        "correct": false,
        "why": "Убирает чтение и запись у остальных. Выполнение не меняет, поэтому r-x не получится."
      },
      {
        "text": "chmod o=rx file",
        "correct": true,
        "why": "o — остальные; = устанавливает права точно; rx — чтение и выполнение, без записи."
      },
      {
        "text": "chmod o+rx file",
        "correct": false,
        "why": "Добавляет r и x, но не убирает уже имеющийся w. Поэтому может остаться rwx."
      },
      {
        "text": "chmod o=r+x file",
        "correct": false,
        "why": "В проверенной попытке выбран o=rx. Важный нюанс: GNU chmod также принимает o=r+x и даёт тот же результат. Этот вариант нельзя считать технически неверным для GNU chmod.",
        "ambiguous": true
      }
    ],
    "ex": "Ответ, выбранный в попытке 10/10: chmod o=rx file. Разница между = и + важнее запоминания буквы ответа. В формулировке есть неоднозначность: GNU chmod допускает o=r+x как последовательность операций =r и +x; это проверено отдельно."
  },
  {
    "en": "Which of the following commands sets the other permissions on a file to r-x?",
    "ru": "Какая числовая команда задаёт остальным права r-x?",
    "topic": "Права",
    "options": [
      {
        "text": "chmod 774 file",
        "correct": false,
        "why": "Последняя цифра 4 означает r--: только чтение."
      },
      {
        "text": "chmod 777 file",
        "correct": false,
        "why": "Последняя цифра 7 означает rwx: есть и запись."
      },
      {
        "text": "chmod 775 file",
        "correct": true,
        "why": "Последняя цифра 5 = 4 + 1 = r-x."
      },
      {
        "text": "chmod 776 file",
        "correct": false,
        "why": "Последняя цифра 6 = 4 + 2 = rw-: нет выполнения."
      }
    ],
    "ex": "Три цифры идут в порядке владелец, группа, остальные. В 775 владельцу и группе дано rwx, остальным r-x. Смотри именно на последнюю цифру."
  },
  {
    "en": "The user sysadmin will be able to change the permissions of a file because they own it. True or False?",
    "ru": "Может ли sysadmin менять права файла, если он его владелец?",
    "topic": "Владельцы",
    "options": [
      {
        "text": "True",
        "correct": true,
        "why": "Владелец может менять права своего файла через chmod."
      },
      {
        "text": "False",
        "correct": false,
        "why": "Для chmod своего обычного файла не обязательно быть root."
      }
    ],
    "ex": "Имя sysadmin само по себе не даёт административных прав. В этом вопросе решающее условие — пользователь является владельцем файла. chmod меняет права, а chown — владельца."
  },
  {
    "en": "Octal notation uses the following values for the permissions granted:",
    "ru": "Какие значения r, w и x используются в восьмеричной записи?",
    "topic": "Права",
    "options": [
      {
        "text": "r = 7, w = 5, x = 0",
        "correct": false,
        "why": "7 и 5 — суммы нескольких прав, а не значения отдельных битов."
      },
      {
        "text": "r = 4, w = 2, x = 0",
        "correct": false,
        "why": "Выполнение равно 1. Ноль означает отсутствие права."
      },
      {
        "text": "r = 3, w = 2, x = 1",
        "correct": false,
        "why": "Чтение равно 4, а не 3."
      },
      {
        "text": "r = 4, w = 2, x = 1",
        "correct": true,
        "why": "Сложи нужные значения внутри каждой тройки прав."
      }
    ],
    "ex": "7 = rwx, 6 = rw-, 5 = r-x, 4 = r--, 3 = -wx, 2 = -w-, 1 = --x, 0 = ---. Например, 750: владелец rwx, группа r-x, остальные ---."
  },
  {
    "en": "Which of the following permissions would allow all users to add, view, and delete files in a directory?",
    "ru": "Какие права каталога позволяют всем создавать, просматривать и удалять файлы?",
    "topic": "Каталоги",
    "options": [
      {
        "text": "777",
        "correct": true,
        "why": "Все три категории получают rwx: просмотр имён, изменение записей и проход по каталогу."
      },
      {
        "text": "666",
        "correct": false,
        "why": "Нет x. Для нормальной работы с содержимым каталога нужен проход по нему."
      },
      {
        "text": "775",
        "correct": false,
        "why": "У остальных r-x: они не могут добавлять и удалять записи."
      },
      {
        "text": "750",
        "correct": false,
        "why": "У остальных вообще нет доступа, а у группы нет записи."
      }
    ],
    "ex": "Для каталога r — читать список имён, w — менять записи, x — проходить к содержимому. Создание и удаление требуют w и x на родительском каталоге. Здесь предполагается обычный каталог без sticky bit, ACL и других ограничений. Чтение содержимого файла дополнительно зависит от прав самого файла."
  },
  {
    "en": "The execute permission on a directory allows you to:",
    "ru": "Что позволяет x у каталога? Выбери три ответа.",
    "topic": "Каталоги",
    "options": [
      {
        "text": "Along with read permission to successfully perform ls -l",
        "correct": true,
        "why": "r позволяет получить имена, а x — обратиться к объектам и получить подробные сведения."
      },
      {
        "text": "Along with write permission to successfully delete the directory",
        "correct": false,
        "why": "Для удаления самого каталога проверяются w и x его родителя; каталог также должен быть пустым для rmdir."
      },
      {
        "text": "Change to that directory or use it as part of a path",
        "correct": true,
        "why": "x — право прохода: cd и обращение к объектам через этот каталог."
      },
      {
        "text": "Along with write permission to successfully create new files",
        "correct": true,
        "why": "Для создания записи в каталоге обычно нужны вместе w и x."
      }
    ],
    "ex": "Не путай права папки и права её родителя. x на папке нужен для входа и обращения к объектам внутри. Удаление самой папки определяется правами родителя, а не только правами удаляемой папки."
  },
  {
    "en": "The chgrp command can be used on a file by:",
    "ru": "Кто может менять группу файла через chgrp?",
    "topic": "Владельцы",
    "options": [
      {
        "text": "Only root",
        "correct": false,
        "why": "Не только root: владелец файла тоже может менять его группу в допустимых пределах."
      },
      {
        "text": "Only the file owner",
        "correct": false,
        "why": "Root также может это делать."
      },
      {
        "text": "The file owner and root",
        "correct": true,
        "why": "Владелец обычно может назначить одну из своих групп; root не связан этим ограничением."
      },
      {
        "text": "A user that belongs to the files current group",
        "correct": false,
        "why": "Членство в текущей группе файла само по себе не даёт права менять его группу."
      }
    ],
    "ex": "chgrp projectgroup file меняет группу файла, но не пользователя-владельца. Обычный владелец может выбрать группу, в которую сам входит. Проверка групп пользователя: id имя; проверка группы файла: ls -l file."
  },
  {
    "en": "The chown command can be used to change the user owner on a file by:",
    "ru": "Кто может менять пользователя-владельца файла через chown?",
    "topic": "Владельцы",
    "options": [
      {
        "text": "Only root",
        "correct": true,
        "why": "В обычной Linux-системе для смены UID владельца нужна привилегия администратора."
      },
      {
        "text": "A user that belongs to the files current group",
        "correct": false,
        "why": "Членство в группе не позволяет назначить нового владельца."
      },
      {
        "text": "The file owner",
        "correct": false,
        "why": "Обычный владелец не может просто передать свой файл другому пользователю."
      },
      {
        "text": "The file owner and root",
        "correct": false,
        "why": "Для смены пользователя-владельца обычного владения файлом недостаточно."
      }
    ],
    "ex": "sudo chown team1 report.txt назначает владельцем team1. Возможность обычного владельца менять группу файла — отдельное правило; это не разрешение менять UID владельца. Привилегированные процессы с нужными capabilities также могут выполнять такие операции."
  },
  {
    "en": "The execute permission is never set on files by default. True or False?",
    "ru": "У обычных новых файлов право выполнения по умолчанию не устанавливается. Верно?",
    "topic": "Права",
    "options": [
      {
        "text": "True",
        "correct": true,
        "why": "Такой ответ принят в этой попытке. Обычные файлы обычно создаются из базового режима 666, без x."
      },
      {
        "text": "False",
        "correct": false,
        "why": "Для стандартного создания текстового файла или touch исходно x не запрашивается."
      }
    ],
    "ex": "Вопрос говорит о типичном создании обычного файла. umask убирает биты из режима, запрошенного программой; он не добавляет x. Слово never здесь не абсолютно: программа может специально создать исполняемый файл, а копирование и установка программ могут сохранить или назначить x."
  },
  {
    "en": "The chown command permits changing group ownership done by root only. True or False?",
    "ru": "Только root может использовать chown для смены группы файла?",
    "topic": "Владельцы",
    "options": [
      {
        "text": "True",
        "correct": false,
        "why": "Обычный владелец также может менять группу своего файла на одну из собственных групп."
      },
      {
        "text": "False",
        "correct": true,
        "why": "chown :projectgroup file может менять только группу; правила отличаются от смены пользователя-владельца."
      }
    ],
    "ex": "chown team1 file меняет пользователя-владельца. chown :projectgroup file меняет группу. chown team1:projectgroup file меняет обоих. Для смены UID обычно нужен root; обычный владелец может менять GID на одну из своих групп."
  }
];
