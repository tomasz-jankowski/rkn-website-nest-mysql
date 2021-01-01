# Dictionary

## acounts

- kind - [ogólny, budżetowy, rezerwowy]
- status - [oczekujący, zatwierdzony, rozliczony, odrzucony, anulowany]

## activities

- hard - umiejętności miękkie / twarde
- active - organizacja / uczestnictwo (wydarzenie)
- size - charakterystyka
- competition_x - liczba 1/2/3 miejsc / wyróżnień (p) / bez wyróżnień (n)
- noif - numer IF
- category = [event, project, competition, publication]
- subcategory = [konferencja, targi, wystawa, warsztat, wyklad, szkoly, pokaz, wycieczka, wolontariat, pp, konstrukcja, badania, oprogramowanie]

## forms

- kind - [ogólny, budżetowy, rezerwowy]
- status - [oczekujący, zatwierdzony, rozliczony, odrzucony, anulowany]

## societies

- kind - [undefined, circle, organization]

# Roles

- rank 0 - guest
- rank 1 - student, can be also a leader
- rank 2 - univeristy employee
- rank 3 - rkn member
- rank 4 - univeristy authorities
- rank 10 - super admin

# Database

## accounts

- id - int
- name - string
- amount - float
- kind - int
- created_at - datetime
- updated_at - datetime
- active - bool - default 0

## activities

- id - int
- name - string
- description - string
- notes - string
- date - date
- society_id - int (KEY)
- category - int
- subcategory - int
- hard - bool
- active - bool
- size - int
- organizers - int
- attendee - int
- competition_1 - int
- competition_2 - int
- competition_3 - int
- competition_d - int
- competition_n - int
- noif - string
- created_at - datetime
- updated_at - datetime

## budgets

- id - int
- account_id - int (KEY)
- society_id - int (KEY)
- total - float
- spent - float - default 0.00
- created_at - datetime
- updated_at - datetime
- requested - float - default 0.00

## ckeditor_assets

- id - int
- data_file_name - string
- data_content_type - string
- data_file_size - int
- data_fingerpint - string
- type - string (KEY)
- width - int
- height - int
- created_at - datetime
- updated_at - datetime

## faculties

- id - int
- name - string
- color - string
- created_at - datetime
- updated_at - datetime

## forms

- id - int
- title - string
- goal - string
- description - string
- kind - int
- budget_id - int (KEY)
- requested - float
- outcome - float - default 0
- created_at - datetime
- updated_at - datetime
- status - int
- society_id - int (KEY)
- spent - float - default 0.00

## friendly_id_slugs

- id - int
- slug - string (KEY)
- sluggable_id - int (KEY)
- sluggable_type - string (KEY)
- scope - string (KEY)
- created_at - datetime

## memberships

- id - int
- society_id - int (KEY)
- user_id - int (KEY)
- role - string
- sort - int
- visible - bool
- leader - bool
- created_at - datetime
- updated_at - datetime

## pages

- id - int
- slug - string
- title - string
- body - string
- published - bool
- sort - int
- menu - int
- icon - string
- created_at - datetime
- updated_at - datetime

## societies

- id - int
- name - string
- abbreviation - string
- email - string
- website - string
- description - string
- faculty_id - int (KEY)
- kind - int
- slug - string
- visible - bool
- created_at - datetime
- updated_at - datetime
- logo_file_name - string
- logo_content_type - string
- logo_file_size - int
- logo_updated_at - datetime

## users

- id - int
- email - string (KEY)
- encrypted_password - string
- first_name - string
- surname - string
- index - int
- rank - int - default 0
- phone - string
- reset_password_token - string (KEY)
- reset_password_sent_at - datetime
- remember_created_at - datetime
- sign_in_count - int - default 0
- current_sign_in_at - datetime
- last_sign_in_at - datetime
- current_sing_in_ip - string
- last_sign_in_ip - string
- created_at - datetime
- updated_at - datetime
