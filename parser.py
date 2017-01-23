#! /usr/bin/env python
# -*- coding: utf-8 -*-

import poplib
import string, random
import StringIO, rfc822
import os
import email
import xlrd
from collections import OrderedDict
import simplejson as json
from sets import Set
from datetime import datetime



SERVER = "pop.gmail.com"
USER  = "darkhan.mami@gmail.com"
PASSWORD = "!WANrltw92"
DIR = "/home/darkhan/nipimunai/temp/"


def getAttachment(emails):
	for mail in emails:
		for part in mail.walk():
			print(part.get_content_type())

			if part.get_content_maintype() == 'multipart':
				continue

			if part.get('Content-Disposition') is None:
				print("no content dispo")
				continue

			filename = part.get_filename()
			if not(filename): filename = "Pulse.xlsx"
			print(filename)

			fp = open(os.path.join(DIR, filename), 'wb')
			fp.write(part.get_payload(decode=1))
			fp.close()



def fileParse():
	wb = xlrd.open_workbook(DIR + 'raschet.xlsx')
	sh = wb.sheet_by_index(0)
	 
	fullData = []
	places = []
	colNames = ['День','Замер','Текущая добыча','Входящая добыча','Добыча после ГТМ','Прогноз']
	plSet = Set([])


	# col_dict = OrderedDict()
	# col_dict['colNames'] = colNames

	# j = json.dumps(col_dict)
	# with open('colNames.json', 'w') as f:
	# 	f.write(j)




	row_values = sh.row_values(3)
	temp = []

	for colnum in range(2, 366):
		temp.append(row_values[colnum])


	fullData.append(temp)


	row_values = sh.row_values(4)
	temp = []

	for colnum in range(2, 366):
		temp.append(row_values[colnum])


	fullData.append(temp)



	row_values = sh.row_values(5)
	temp = []

	for colnum in range(2, 366):
		temp.append(row_values[colnum])


	fullData.append(temp)



	row_values = sh.row_values(6)
	temp = []

	for colnum in range(2, 366):
		temp.append(row_values[colnum])


	fullData.append(temp)



	row_values = sh.row_values(6)
	temp = []

	for colnum in range(2, 366):
		temp.append(row_values[colnum])


	fullData.append(temp)






	full_dict = OrderedDict()
	full_dict['UAZ'] = fullData
	j = json.dumps(full_dict)
	
	with open('UAZ.json', 'w') as f:
		f.write(j)




	






# server = poplib.POP3_SSL(SERVER)

# server.user(USER)
# server.pass_(PASSWORD)


# resp, items, octets = server.list()


# numMessages = len(items)

# for i in xrange(numMessages - 1, 0 , -1):
# 	id, size = string.split(items[i])
# 	resp, text, octets = server.retr(id)
# 	raw_message = text

# 	text = string.join(text, "\n")
# 	file = StringIO.StringIO(text)
# 	message = rfc822.Message(file)

# 	if message['Subject'] == 'Pulse':
# 		emails = [email.message_from_string('\n'.join(raw_message))]
# 		getAttachment(emails)
# 		break

fileParse()

print 'DONE'

		

		