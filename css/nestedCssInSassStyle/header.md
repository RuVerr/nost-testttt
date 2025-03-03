/* .header{
    top: 0;
    width: 100%;
    padding: 35px 0;
    z-index: 100;
    background-color: var(--background-shade-sand);
    .header_content{
        .nav{
            grid-template-columns: minmax(13%, 0) 4fr 1fr;
            .logo_header{
                width: 100%;
                font-size: var(--font-lg);
                color: var(--shade-forest-text-h);
                text-transform: uppercase;
                cursor: pointer;
            }
            .list_box{
                padding: 0 var(--padding-xl);
                .list{
                    width: 100%;
                    grid-template-columns: repeat(5, auto);
                    gap: var(--gap-xl);
                    .list_item{
                        .link_item{
                            white-space: nowrap;
                            text-transform: uppercase;
                            font-size: var(--font-sm);
                            color: var(--shade-forest-text-a);
                        }
                        .link_item::after{
                            content: '';
                            display: block;
                            position: absolute;
                            bottom: -5px;
                            left: 0;
                            width: 0;
                            margin: 0 auto;
                            border-bottom: 1.5px solid var(--shade-forest-text-a-hover);
                            transition: var(--transition-medium);
                        }
                        
                        .link_item:hover::after,
                        .link_item:focus::after {
                            width: 100%;
                            color: var(--shade-forest-text-a-hover);
                            
                        }
                        
                        .link_item:hover,
                        .link_item:focus {
                            color: var(--shade-forest-text-a-hover);
                        }
                        
                        .link_item:active {
                            color: var(--shade-forest-text-a-hover);
                        }
                        
                    }
                }
            }
            .header_form_content_popup{
                display: grid;
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 8;
                transform: translate(-50%, -129%);
                width: var(--width-xxl);
                background: var(--background-dark-green);
                border-radius: var(--border-radius-xl);
                .close_header_button_popup{
                    width: 34px;
                    background-color: transparent;
                    border: none;
                    justify-self: end;
                    margin: 20px;
                    cursor: pointer;
                }
                .telegram_form{
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr;
                    place-content: center;
                    padding: var(--padding-lg);
                    gap: 30px;
                }
                .input{
                    width: var(--width-sm);
                    height: var(--height-md);
                    font-size: var(--font-md);
                    padding-left: 10px;
                    outline: none;
                    border: none;
                    border-radius: var(--border-radius-lg);
                    color: var(--shade-white-text);
                    background-color: rgba(255, 255, 255, 0.27);
                }
                input:-webkit-autofill {
                    appearance: none;
                    -webkit-appearance: none;
                }
                .input_label{
                    top: 23px;
                    left: 14px;
                    display: grid;
                    white-space: nowrap;
                    user-select: none;
                    z-index: -1;
                    font-size: var(--font-x);
                    color: var(--shade-ivory-text);
                    transition: .3s ease-in;
                }

                .input:focus + label,
                .input:not(:placeholder-shown) + .input_label{
                    top: -20px;
                }

                .submit_button {
                    position: relative;
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: var(--background-white-button);
                    color: var(--shade-forest-text-button);
                    border: none;
                    cursor: pointer;
                    border-radius: 100px;
                    transition: var(--transition-fast);
                    .spinner {
                        position: absolute;
                        top: 10px;
                        left: 148px;
                        display: none;
                        border: 2px solid #fff;
                        border-top: 2px solid transparent;
                        border-radius: 50%;
                        width: 20px;
                        height: 20px;
                        animation: spin 1s linear infinite;
                    }
                }

                .submit_button:hover{
                    background-color: var(--shade-forest-text-button);
                    color: var(--background-white-button);
                }
            }

            .burger_menu{
                width: 50px;
                z-index: 6;
                cursor: pointer;
                display: none;
                .burger_line{
                    margin-bottom: 7px;
                    width: 100%;
                    border: 2px solid var(--background-dark-green);
                    border-radius: 6px;
                }
                .burger_line:nth-child(3){
                    margin-bottom: 0;
                }
                .burger_slide_content{
                    z-index: 7;
                    width: 240px;
                    height: 150vh;
                    margin-top: 43px;
                    background-color: var(--background-shade-sand);
                    border-radius: 30px 0;
                }
            }
        }
    }
} */