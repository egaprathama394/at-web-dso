Feature: Accessories Filter

Background:
Given a guest is at DSO Accessories Page

@DAYT-43 @1Group1Category
Scenario Outline: As a guest, I can filter Accessories By 1 Group of 1 Category
Given accessories has searched by model "Terios"
When a guest click "1group" of <Category>
Then a guest can see Accessories related by filter

@DAYT-44 @AllGroup1Category
Scenario Outline: As a guest, I can filter Accessories By All Group of 1 Category
Given accessories has searched by model "Terios"
When a guest click "allgroup" of <Category>
Then a guest can see Accessories related by filter

@DAYT-45 @1GroupAllCategory
Scenario Outline: As a guest, I can filter Accessories By 1 Group of All Category
Given accessories has searched by model "Terios"
When a guest click "onegroup" of "allcategory"
Then a guest can see Accessories related by filter

# Uncheck And Reset Filter at Accessories Sort Feature 

Examples:
| Category | 
| exterior |
| interior |
| price |