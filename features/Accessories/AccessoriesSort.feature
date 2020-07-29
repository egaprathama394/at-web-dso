Feature: Accessories Sort & Uncheck Filter

Background:
Given a guest is at DSO Accessories Page

Scenario Outline: As a guest, I can sort PLP 
Given Accesoriess filtered by Alaram
When a guest sort Accessories by "<Sort>"
Then  a guest can see Accessories sorted

# Scenario: As a guest, I can unfilter group filter
# Given accessories has searched by model "Terios"
# Given accessories has filtered by Side Visor
# When a guest uncheck the checkbox Side Visor
# Then a guest can see all Accessories

Examples:
| Sort |
| relevant |
| cheap |
| expensive |