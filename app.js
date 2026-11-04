const chapter=18;
const storageKey="linux-study-ch18-v2";
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
