import ascii_magic
#pip install ascii_magic

image_path = "munecaof.png"
ascii_art = ascii_magic.from_image(image_path)
ascii_art.to_terminal()