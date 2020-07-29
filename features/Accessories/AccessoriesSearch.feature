Feature: Accessories Search

Background: 
Given a guest is at DSO Accessories Page

@DAYT-40 @ModelKendaran
Scenario: As a guest, I can search Accessories by Model Kendaran
Given Model Kendaraan "Terios"
Given Year "N"
When a guest click Cari Button
Then a guest can see Accessories that related by search
Then a guest can see Filter that related by search

@DAYT-40 @NotificationModelKendaraan
Scenario: As a guest, I search without choose Model Kendaraan
Given Year filled <Verify>
When a guest click Cari Button
Then a guest can see Notification Model Kendaran Must be Filled

@DAYT-41 @Year
Scenario Outline: As a guest, I can searh Accessories By Year
Given Model Kendaraan "Terios"
Given Year <Year>
When a guest click Cari Button
Then a guest can see Accessories that related by search

Examples:
| Year | Verify |
| 2013 | 2018 |#ada data
| 2014 | N |#tidak ada data







