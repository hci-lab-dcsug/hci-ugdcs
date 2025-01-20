import requests
from bs4 import BeautifulSoup
import time

def scrape_publications_apa(scholar_id, output_file="apa_publications.txt"):
    base_url = f"https://scholar.google.com/citations?user={scholar_id}&hl=en&oi=ao"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
    }
    
    publications = []
    start = 0  # Pagination offset

    try:
        while True:
            # Append the pagination offset to the URL
            url = f"{base_url}&cstart={start}&pagesize=100"
            response = requests.get(url, headers=headers)
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, "html.parser")
                
                # Extract each publication row
                rows = soup.find_all("tr", class_="gsc_a_tr")
                
                # If no more rows, stop the loop
                if not rows:
                    print("No more publications found.")
                    break
                
                for row in rows:
                    # Extract publication details safely
                    title_elem = row.find("a", class_="gsc_a_at")
                    title = title_elem.get_text(strip=True) if title_elem else "Title not available"
                    
                    authors_and_journal_elem = row.find("div", class_="gs_gray")
                    authors_and_journal = authors_and_journal_elem.get_text(strip=True) if authors_and_journal_elem else "Authors/Journal not available"
                    
                    year_elem = row.find("span", class_="gsc_a_h")
                    year = year_elem.get_text(strip=True) if year_elem else "Year not available"
                    
                    # Construct APA-style citation
                    citation = f"{authors_and_journal} ({year}). {title}."
                    publications.append(citation)
                
                # Move to the next page
                start += 100
                
                # Delay to avoid rate-limiting
                time.sleep(1)
            elif response.status_code == 429:
                print("Rate limit exceeded. Try again later.")
                break
            else:
                print(f"Failed to fetch the page. Status Code: {response.status_code}")
                break
        
        # Save to file
        with open(output_file, "w", encoding="utf-8") as file:
            file.write("Publications in APA Format:\n\n")
            for i, citation in enumerate(publications, start=1):
                file.write(f"{i}. {citation}\n")
        
        print(f"All publications saved to {output_file}")
        return publications
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

# Example usage
if __name__ == "__main__":
    scholar_id = "rTdeBg0AAAAJ" 
    print("Scraping.............")
    apa_publications = scrape_publications_apa(scholar_id, output_file="apa_publications.txt")
    
    if apa_publications:
        print(f"Scraped {len(apa_publications)} publications in APA format successfully!")
