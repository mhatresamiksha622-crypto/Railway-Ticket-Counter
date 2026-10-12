; Railway Platform Ticket Counter System
; 8085 Assembly Language

LXI H, 2050H

; Store ticket price
MVI A, 19H
STA 2050H

; Store ticket quantity
MVI A, 04H
STA 2051H

; Store payment amount
MVI A, 96H
STA 2052H

; Calculate total fare
LDA 2050H
MOV B, A

LDA 2051H
MOV C, A

MVI A, 00H

ADD B
DCR C
JZ STORE

LOOP:
ADD B
DCR C
JNZ LOOP

STORE:
STA 2053H

; Calculate change
LDA 2052H
MOV B, A

LDA 2053H
MOV C, A

MOV A, B
SUB C

STA 2054H

HLT
