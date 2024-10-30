import os, datetime
import sitemap.generator as generator

sitemap = generator.Sitemap()
sitemap.add("http://www.dalipen.com", lastmod=datetime.datetime.now(), changefreq="monthly", priority="1.0")
sitemap.add("http://www.dalipen.com/kolay", lastmod=datetime.datetime.now(), changefreq="monthly", priority="0.8")
sitemap.add("http://www.dalipen.com/about-us", lastmod=datetime.datetime.now(), changefreq="monthly", priority="0.5")
sitemap.add("http://www.dalipen.com/contact-information", lastmod=datetime.datetime.now(), changefreq="monthly", priority="0.5")
sitemap.add("http://www.dalipen.com/privacy-policy", lastmod=datetime.datetime.now(), changefreq="monthly", priority="0.5")
sitemap_xml = sitemap.generate()
with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "sitemap.xml"), "w") as f:
    f.write(sitemap_xml)
print("Sitemap generated successfully!")