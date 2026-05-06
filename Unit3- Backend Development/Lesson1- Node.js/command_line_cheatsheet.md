
# Command Line Cheat Sheet

## File and Directory Navigation

| **Action**                          | **Command (macOS)**        | **Command (Windows)**     |
|-------------------------------------|----------------------------|---------------------------|
| Print current directory             | `pwd`                      | `pwd`                     |
| List files in the current directory | `ls`                       | `dir`                    |
| Change directory                    | `cd <path>`                | `cd <path>`              |
| Move up one directory               | `cd ..`                    | `cd ..`                  |
| Go to home directory                | `cd ~`                     | `cd %HOMEPATH%`          |

## File and Directory Operations

| **Action**                          | **Command (macOS)**        | **Command (Windows)**     |
|-------------------------------------|----------------------------|---------------------------|
| Create a new directory              | `mkdir <directory_name>`   | `mkdir <directory_name>` |
| Create a file                       | `touch <file_name>`        | `echo > <file_name>`     |
| Remove a directory                  | `rmdir <directory_name>`   | `rmdir <directory_name>` |
| Delete a file                       | `rm <file_name>`           | `del <file_name>`        |
| Copy a file                         | `cp <source> <destination>`| `copy <source> <destination>` |
| Move/Rename a file                  | `mv <source> <destination>`| `move <source> <destination>` |

## File Viewing and Editing

| **Action**                          | **Command (macOS)**        | **Command (Windows)**     |
|-------------------------------------|----------------------------|---------------------------|
| View file contents                  | `cat <file_name>`          | `type <file_name>`        |
| Edit a file                         | `nano <file_name>`         | `notepad <file_name>`     |
| Open file with default app          | `open <file_name>`         | `start <file_name>`       |

## Process Management

| **Action**                          | **Command (macOS)**        | **Command (Windows)**     |
|-------------------------------------|----------------------------|---------------------------|
| List running processes              | `ps`                       | `tasklist`               |
| Kill a process                      | `kill <PID>`               | `taskkill /PID <PID>`     |
| Search for a process                | `ps aux | grep <process>`   | `tasklist | findstr <process>` |

## System Information

| **Action**                          | **Command (macOS)**        | **Command (Windows)**     |
|-------------------------------------|----------------------------|---------------------------|
| Check disk space                    | `df -h`                    | `dir` (from the drive)    |
| Check system information            | `uname -a`                 | `systeminfo`             |
| View system resources               | `top`                      | `taskmgr`                |

## Network Operations

| **Action**                          | **Command (macOS)**        | **Command (Windows)**     |
|-------------------------------------|----------------------------|---------------------------|
| Check IP address                    | `ifconfig`                 | `ipconfig`               |
| Ping a server                       | `ping <hostname>`          | `ping <hostname>`        |
| Trace route                         | `traceroute <hostname>`    | `tracert <hostname>`     |
